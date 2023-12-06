// 3. Device Name System
// Create unique device names to be used in a residential loT (Internet of Things) system. If a device name already exists in the system, an integer number is added at the end of the name to make it unique. The integer added starts with 1 and is incremented by 1 for each new request of an existing device name. Given a list of device name requests, process all requests and return an array of the corresponding unique device names.

// Example
// n = 6
// devicenames = ['switch', 'tv', 'switch', 'tv', 'switch', 'tv']
// • devicenames[0] = "switch" is unique. uniqueDevicename[0]="switch" • devicenames[1]="tv" is unique. uniqueDevicename[1]="tv" • devicenames[2]= devicenames[0]. Add 1 at the end the previous unique username "switch", uniqueDevicename[2]="switch1"
// • devicenames[3]= devicenames[1]. Add 1 at the end the previous unique username "tv", uniqueDevicename[3]="tv1"
// • devicenames[4] = devicenames[2]. Increment by 1 the number at the end of the previous unique username "switch1", uniqueDevicenames[4]="switch2"
// • devicenames[5] = devicenames[3]. Increment by 1 the number at the end of the previous unique username "tv1", uniqueDevicenames[5]="tv2"
// • return uniqueDevicenames = ['switch', 'tv', 'switch1', 'tv1, 'switch2', 'tv2']

// Function Description
// Complete the function deviceNamesSystem in the editor below.
// deviceNamesSystem has the following parameter(s):
// string devicenames[n]: an array of device name strings in the order requested

// Returns
// string[n]: an array of string usernames in the order assigned

function deviceNamesSystem(devicenames) {
    const uniqueNames = {};
    const result = [];

    for (const name of devicenames) {
        if (!(name in uniqueNames)) {
        // If the name is not in the object, add it
        uniqueNames[name] = 0;
        result.push(name);
        } else {
        // If the name is already in the object, increment the number
        uniqueNames[name]++;
        const newName = `${name}${uniqueNames[name]}`;
        result.push(newName);
        }
    }

    return result;
}
