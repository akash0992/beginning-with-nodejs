/**
 * Created by deepak.m.shrma@gmail.com on 11/1/15.
 */

/**
 *
 * @param name
 * @param age
 * @param desc
 * @returns {{get: getInformation}}
 * @constructor
 */
function Person(name, age, desc) {
    var _name = name || 'no_name',
        _age = age || 1 || 'just_born',
        _desc = desc || 'i am just a moron';

    function getInformation() {
        return {
            name: _name,
            age: _age,
            desc: _desc
        }
    }

    return {
        get: getInformation
    }
}

/**
 *
 * @type {Person}
 */
module.exports = Person;
