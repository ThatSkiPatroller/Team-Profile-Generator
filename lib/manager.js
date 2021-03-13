const employee = require('./employee');

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole () {
        return 'Manager';
    }
}

module.exports = manager;