import firebase from "../firebase";

const db = firebase.ref("/biodatas");

class BioDataService {
  getAll() {
    return db;
  }

  create(biodata) {
    return db.push(biodata);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new BioDataService();
