// write a function that works the same as JSON.stringify

function stringify(arg) {

    if (typeof arg === "object") {
        if (arg === null) {
            return "null";
        } else if (Array.isArray(arg)) {
            let str = "[";
            arg.forEach((el, idx) => {
                str += stringify(el);
                if (idx < arg.length - 1) {
                    str += ",";
                }
            });
            return str + "]";
        } else {
            let str = "{";
            const keys = Object.keys(arg);
            keys.forEach((key, idx) => {
                str += `"${key}":${stringify(arg[key])}`;
                if (idx < keys.length - 1) {
                    str += ",";
                }
            });
            return str + "}";
        }
    } else if (typeof arg === "string") {
        return `"${String(arg)}"`;
    } else {
        return `${String(arg)}`;
    }
}

console.log(stringify([12,[],{1: "string", 2: [undefined]}]));