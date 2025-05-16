var a = 1;
{
    {
        {
            var a = 2
        }
    }
}

console.log(a)

let b = 3
{{{
    let b = 4
}}}

console.log (b);
const d = 5

{{{
    const d = 6
    console.log("dentro", d)
}}}

console.log(d)