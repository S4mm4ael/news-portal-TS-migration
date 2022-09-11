import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '7a1f40c16e1a4260bd35ac0a8d1ae7d3',
        });
    }
}

export default AppLoader;
