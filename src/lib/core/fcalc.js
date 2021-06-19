// ===================================================================
//     formform core module 'calc'
//     -- since 2018, by Peter Hofmann (formsandlines.eu)
// ===================================================================

/**
 * FORM arithmetic for commutative relation: x y
 * 
 * * verified
 */
export function rel_logic(fx, fy) {
    if ( fx > 3 || fx < 0 || fy > 3 || fy < 0 ) return -98;
    else if ( fx === 0 || fy === 1 ) { 
        return fy; // C3 /Theorem 2
    } 
    else if ( fy === 0 || fx === 1 ) { 
        return fx; // C3 /Theorem 2
    }
    else if ( fx === fy ) { 
        return fx; // C5 /Theorem 5
    }
    else if ( (fx === 2 && fy === 3) || (fx === 3 && fy === 2) ) { 
        return 1; // C2 /Theorem 13 + C3 /Theorem 2
    }
    return -99; // error code
}
/**
 * Shortcut for relation with n variables: x_1 ... x_n
 * 
 * * verified
 */
export function rel(...fVals) {
    if (fVals.length > 1) {
        let val = 0;
        for (const i in fVals) {
            val = rel_logic( val,fVals[i] );
        }
        return val;
    }
    return -97; // error code
}

/**
 * FORM arithmetic for inversion/negation: (x)
 * 
 * * verified
 */
export function inv_logic(fx) {
    switch (fx) {
    case 0:
        return 1;
    case 1:
        return 0;
    case 2:
        return 3;
    case 3:
        return 2;
    }
    return -99; // error code
}
/**
 * Shortcut for n inversions/negations: (x)
 * 
 * * verified
 */
export function inv(fx, n) {
    if (n > 0) {
        let val = fx;
        for (let i=0; i<n; i++) {
            val = inv_logic(val);
        }
        return val;
    }
    else return inv_logic(fx);
}


// ---------------------------
//  RE-ENTRY FORM CALCULATION
// ---------------------------

/**
 * FORM arithmetic for different self-equivalent re-entry FORMs
 * 
 * [Arguments] reEven: even re-entry-number? | lastOpen: last variable not crossed? | fVals: variables (0/1/2/3)
 */
export function reEntry(reEven, lastOpen, altInterpr, ...fVals) {
    /* 
        * Note: calculation manually verified for… 
        - (uFORM a1, res2) ƒ=((ƒx)y)
        - (iFORM a2, res2) ƒ(ƒ)=(a1x)y
        - (iFORM b1, res3) [2|r|+1] ƒ(ƒ)=(((ƒx)y)z) ƒ=((((((ƒx)y)z)x)y)z)
        - (iFORM b2, res3) [2|r|+1] ƒ(ƒ)=((b1x)y)z
        - (uFORM c1, res3) [2|r|] ƒ=((((((ƒx)y)z)x)y)z)
        - (uFORM c2, res3) [2|r|] ƒ(ƒ)=((c1x)y)z
        Should work with resolutions of 4, 5, … but needs verification.

        My basic observations about self-equivalent re-entry FORMs:
        - Every re-entry FORM needs to have an even number of crosses to be self-equivalent (uFORM): ƒ = ((ƒ1)2) .
        So with uneven resolutions, we always need to have an even re-entry number: ƒ = ((((((ƒ1)2)3)1)2)3) .
        - To be able to also have uneven re-entry numbers, either the resolution needs to be even
        or we have to embed the re-entry FORM into a normal FORM that is one re-entry of that FORM:
        ƒ(ƒ) = (((ƒ1)2)3) <-> ((( ƒ = ((((((ƒ1)2)3)1)2)3) 1)2)3) .
        These compositional re-entry FORMs are iFORMs, since they resolve to: ( ƒ = ((ƒ)) ) .
        - If the outmost cross of the FORM should be left out (open FORMs), this can only be done if we embed
        a corresponding closed FORM of itself that either is or embeds its re-entry FORM (cases described above).
        I believe the outmost (open) FORM is not being counted as a re-entry at all, since it's missing a cross.

        This algorithm is based on the following rules/patterns/observations derived from "uFORM iFORM":
        [1] If 1 is somewhere in the FORM, it will dominate all values in spaces deeper than m,
            so the re-entry is obsolete and we can start calculate from this space. 
        [2] If there are 3/2 or 2/3 pairs in the FORM, the first term can be turned into 1, since
            through C2 the second term can always be generated into its space, where 23 = 1.
            Then we can proceed as in (1).
        [3] If all variables are 0, we will have either a uFORM or iFORM, hence the value of the
            FORM will be either 2 or 3, depending on the following cases:
            - 2: closed,      resolution even, re-entry-number even/odd (a1)
            - 2: closed/open, resolution odd,  re-entry-number even     (c1, c2)
            - 3: open,        resolution even, re-entry-number even/odd (a2)
            - 3: closed/open, resolution odd,  re-entry-number odd      (b1, b2)
        Since [1][2][3] eliminate all other cases, all variables are now either 2 or 3 (and maybe 0s),
        so using C2 as described above, only the last occasion of these variables need to be considered:
        [4] If we use uFORM iFORM interpretation 2 (p.167) recursive identity ( mn <-> ((ƒ))=ƒ ), C2 and C1
            ƒ can be separated from 2/3 if there is an even number of crosses (or none) after the variable.
            Then, depending on the FORM, we have either:
            iFORM: (ƒ=((ƒ))) 2/3 <-> (2) 2/3  or
            uFORM:  ƒ=((ƒ)) 2/3  <->  2 2/3
        [5] If [4] does not apply or we decide for uFORM iFORM interpretation 1 (p.167): recursion instruction 
            ( mn -> ƒ=((ƒ)) ), we will have either variables of 2 or 3 which we cannot relate to ƒ, since
            they need not be the same undetermined value. Using case distinction, we interpret the
            last occasion of 2 or 3 as 0 and as 1, calculate everything with ƒ=2 and relate the results 
            using contravalence: ((x)y)((y)x) which yields the final result.
    */
    // check if arguments are actually defined
    if (reEven === undefined) {
        reEven = false;
    }
    if (lastOpen === undefined) {
        lastOpen = false;
    }

    const resEven = (fVals.length%2 == 0); // even resolution?
    let zeros = 0; // zero counter
    let firstUndef = -1; // catches first mn/(mn)

    // [3] determine if uFORM or iFORM
    // let uFORM = false; // ? not in use
    let iFORM = false;
    if (resEven) {
        if (lastOpen) iFORM = true;
        // else uFORM = true;
    }
    else {
        // if (reEven) uFORM = true;
        // else iFORM = true;
        if (!reEven) iFORM = true;
    }
    
    // check if there is 1/m somewhere in x_1 … x_n
    let calcfrom = -1;
    for(let i=0; i<fVals.length; i++) {
        const fx = fVals[i]; 

        if (fx == 1) {
            calcfrom = i; // [1] if m is somewhere, set calculation start from there
            break;
        }
        else if (fx == 0) zeros++; // [3] keep track of how many zeros there are
        else if (fx == 2 || fx == 3) { // [2]
            if(firstUndef == -1) firstUndef = i; // if there is a first 2/u or 3/i, remember
            else if(fx != fVals[firstUndef]) {
                calcfrom = firstUndef; // if 3/2 or 2/3 pairs, set calculation form first undef. value
                break;
            }
        }
    }
    
    if (zeros == fVals.length) {
        // [3] in case all variables are n, just return the undefined/imaginary value of the FORM
        if (iFORM) return 3;
        else return 2;
    }
    if (calcfrom >= 0) {
        // [1|2] if there is a 1/m somewhere in the form, we can easily calculate the rest from this point
        let val = 1;
        for(let i=calcfrom; i<fVals.length; i++) {      
            if (lastOpen && i == fVals.length-1) {
                val = rel(val,fVals[i]); // if no cross on last var, don't invert
            }
            else val = inv( rel(val,fVals[i]) );
        }
        return val;
    }
    
    // what remains, will only be either
    // - (1) all variables are n/0 or mn/2   or
    // - (2) all variables are n/0 or (mn)/3
    // So we calculate from the last occasion of 2 or 3, because with C2 (degenerate) all else can be ignored

    // for even closed re-entry-FORMs with uneven resolution (uFORM c1), we need to do the calculation twice
    const repeat = (reEven && !resEven && !lastOpen)? 2:1;
    
    for(let i=(fVals.length*repeat)-1; i>=0; i--) {
        const index = i%fVals.length; // repeated variable index

        if (fVals[index] == 2 || fVals[index] == 3) {
            const iRev = (fVals.length*repeat)-1 - i; // reverse index to easier check for interpretation 2 (see next)

            if (altInterpr && ((lastOpen && iRev%2==0) || (!lastOpen && iRev%2==1))) {
                // uFORM iFORM interpretation 2: recursive identity ( ƒ=((ƒ)) <-> mn )
                // ƒ=((ƒ)) can be separated if there is an even number of crosses (or none) after the variable; this is the case if either:
                // - (1) the FORM is open and the backwards variable index is even      or
                // - (2) the FORM is closed and the backwards variable index is odd

                // to determine if the number of crosses between ƒ and our var is even, we distinguish two cases:
                if (iFORM) return rel(3,fVals[index]); // iFORM: (ƒ=((ƒ)))x <-> (mn) x
                else return rel(2,fVals[index]);       // uFORM:  ƒ=((ƒ))x  <->  mn x
            }
            else {
                // [5] if everything else fails, use case distinction: uFORM iFORM (p.94); also according to:
                // uFORM iFORM (p.167) interpretation 1: recursion instruction ( ƒ=((ƒ)) and mn need to be differentiated)

                let case0 = 2; // re-entry ƒ=mn, because other mn=0
                if (lastOpen && !resEven && !reEven) case0 = inv(case0); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                for(let j=0; j<(fVals.length*repeat); j++) {
                    let fx = 0; // all other values will be (degenerated to) zero
                    if (j == i) {
                        if(fVals[index] == 2) fx = 0; // last occasion of mn/2 will be interpreted as 0
                        else fx = inv(0); // last occasion of (mn)/3 will be interpreted as (0)
                    }
                    if (lastOpen && j == fVals.length-1) case0 = rel(case0,fx); // if no cross on last var, don't invert
                    else case0 = inv( rel(case0,fx) );
                }
                let case1 = 2; // re-entry ƒ=mn, because other mn=1
                if (lastOpen && !resEven && !reEven) case1 = inv(case1); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                for(let j=0; j<(fVals.length*repeat); j++) {
                    let fx = 0; // all other values will be (degenerated to) zero
                    if (j == i) {
                        if(fVals[index] == 2) fx = 1; // last occasion of mn/2 will be interpreted as 1
                        else fx = inv(1); // last occasion of (mn)/3 will be interpreted as (1)
                    }
                    if (lastOpen && j == fVals.length-1) case1 = rel(case1,fx); // if no cross on last var, don't invert
                    else case1 = inv( rel(case1,fx) );
                }

                return cont( case0,case1 ); // contravalence of both cases
            }

        }
    }
    return -99; // error code
} // end reEntry()


// ---------------------------
//  COMPLEX FORM CALCULATIONS
// ---------------------------

/**
 * FORM arithmetic for "implication": (x)y
 */
 export function implL(fx, fy) { // verified
    return rel( inv(fx),fy );
}
/**
 * FORM arithmetic for "implication": x(y)
 */
export function implR(fx, fy) {
    return rel( fx,inv(fy) );
}

/**
 * FORM arithmetic for "presection"/"decision": ((x)y)
 */
export function pre(fx, fy) { // verified
    return inv( implL(fx,fy) );
}
/**
 * FORM arithmetic for "postsection"/"decision": (x(y))
 */
export function post(fx, fy) { // verified
    return inv( implR(fx,fy) );
}

/**
 * FORM arithmetic for "contravalence"/"either-or": ((x)y) (x(y))
 */
export function cont(fx, fy) { // verified
    return rel( pre(fx,fy), post(fx,fy) );
}
/**
 * FORM arithmetic for "equivalence"/?: ( ((x)y) (x(y)) )
 */
export function equiv(fx, fy) {
    return inv( cont(fx,fy) );
}


export function uForm2(fA, fB, altInterpr=false) { // * calculation verified (both interpr.)
    return reEntry(undefined, false, altInterpr, fA, fB);
}
export function iForm2(fA, fB, altInterpr=false) { // * calculation verified (both interpr.)
    return reEntry(undefined, true, altInterpr, fA, fB);
}
export function uForm3(lastOpen, fA, fB, fC, altInterpr=false) { // * calculation verified closed & open (both interpr.)
    return reEntry(true, lastOpen, altInterpr, fA, fB, fC);
}
export function iForm3(lastOpen, fA, fB, fC, altInterpr=false) { // * calculation verified closed & open (both interpr.)
    return reEntry(false, lastOpen, altInterpr, fA, fB, fC);
}
export function uForm4(fA, fB, fC, fD, altInterpr=false) {
    return reEntry(undefined, false, altInterpr, fA, fB, fC, fD);
}
export function iForm4(fA, fB, fC, fD, altInterpr=false) {
    return reEntry(undefined, true, altInterpr, fA, fB, fC, fD);
}
export function uForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
    return reEntry(true, lastOpen, altInterpr, fA, fB, fC, fD, fE);
}
export function iForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
    return reEntry(false, lastOpen, altInterpr, fA, fB, fC, fD, fE);
}