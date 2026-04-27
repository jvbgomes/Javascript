export default function trateErrors(err) {
    if (err.code === 'ENOENT') {
        throw new Error('Arquive not found');
    } else {
        return 'Error in the aplication';
    }
}
