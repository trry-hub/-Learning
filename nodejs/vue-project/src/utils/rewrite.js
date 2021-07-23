String.prototype.toString = function dogToString() {
    const ret = `String ${this.name} is a ${this.sex} ${this.color} ${this.breed}`
    return ret
}
