import TimeRepository from "../repositories/TimeRepository.js";

class TimeController {

    index(req, res) {
        TimeRepository.index(req, res);
    }

    show(req, res) {
        TimeRepository.show(req, res);
    }

    store(req, res) {
        TimeRepository.store(req, res);
    }

    update(req, res) {
        TimeRepository.update(req, res);
    }

    delete(req, res) {
        TimeRepository.delete(req, res);
    }
}

export default new TimeController();