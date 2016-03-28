export default class Utils {

    /**
     * Sort array by not done first, then alphabetical order
     * @param array
     * @constructor
     */
    static ArraySort(array: Array<any>) {
        if (array) {
            array.sort((a: any, b: any) => {
                if ((a.done && b.done) || (!a.done && !b.done)) {
                    if (a.text > b.text) {
                        return 1;
                    } else if (a.text < b.text) {
                        return -1;
                    } else {
                        return 0;
                    }
                } else if (a.done && !b.done) {
                    return 1;
                } else if (!a.done && b.done) {
                    return -1;
                }
            });
        }
    }
}