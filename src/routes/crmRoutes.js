import {
  addNewContact,
  getContact,
  getContactWithID,
  updateContact,
  deleteContact
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`req from ${req.originalUrl}`);
      console.log(`req from ${req.method}`);
      next();
    }, getContact)
    //post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactId')
    //get specific contact
    .get(getContactWithID)

    //put request
    .put(updateContact)

    //delete request
    .delete(deleteContact);
};

export default routes;
