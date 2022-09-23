import Service from './service';

export class Controller {
  login(req, res) {
    Service.login(req.body).then((r) => {
      if(r.error) {
        res.status(400).send(r);
      }
      res.status(200).send(r)
    });
  }

  signup(req, res) {
    Service.create(req.body).then((r) => {
      if(r.error) {
        res.status(400).send(r);
      }
      res.status(200).send(r)
    });
  }
}
export default new Controller();
