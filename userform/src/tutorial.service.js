import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/ccs");
  }

  get(id) {
    return http.get(`/ccs/${id}`);
  }

  create(data) {
    return http.post("/ccs", data);
  }

  update(id, data) {
    return http.put(`/ccs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ccs/${id}`);
  }

  deleteAll() {
    return http.delete(`/ccs`);
  }

  findByTitle(title) {
    return http.get(`/ccs?title=${title}`);
  }
}

export default new TutorialDataService();
