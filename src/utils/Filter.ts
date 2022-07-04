export function labelFilter (value: string) {
    var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
    const str = value.replace( rex, '$1$4 $2$3$5' );
    return `${str[0].toUpperCase()}${str.substring(1)}`
}