function merge(a, b)
{
    if (typeof a === "object" && typeof b === "object")
    {
        for (var property in b)
        {
            a[property] = b[property];
        }
        return a;
    }
    else
    {
        return undefined;
    }
}


module.exports = merge;
