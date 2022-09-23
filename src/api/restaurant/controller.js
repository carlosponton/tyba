import Service from './service';

export class Controller {
  nearvy(req, res) {
    Service.getRestaurantNeavy(req.query, req.user).then((r) => {
      if(r.error) {
        res.status(400).send(r);
      }
      res.status(200).send(r)
    });
  }
  historyNearvy(req, res) {
    Service.getHistoryNearvy(req.user).then((r) => res.send(r)).catch(error => res.status(400).send(error));
  }
}
export default new Controller();
