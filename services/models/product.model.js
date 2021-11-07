const knex = require("knex");
const db = require("../../utils/db");
const tableName = "product";


module.exports = {
  findAll() {
    return db(tableName).where("Isdeleted", 0);
  },
  findbyCategory(id) {
    return db(tableName).where("Isdeleted", 0).andWhere("IdCategory", id);
  },
  findById(id){
    return db(tableName).where("Isdeleted", 0).andWhere("id", id);
  },
  updatePrice(id, price, idbuyer){
    return db(tableName).where("id", id).update({
      NowPrice: price,
      IdUserBuyer: idbuyer
    });
  },

  add(product) {
    return db(tableName).insert(product);
  },
  update(product, id) {
    return db(tableName).where("id", id).update(product);
  },
  delete(id) {
    return db(tableName).where("id", id).update("Isdeleted", 1);
  },
  deleteWithUserAndProductId(entity){
    return db(tableName).where("IdUser", entity.IdUser).andWhere("IdProduct",entity.IdProduct).update("Isdeleted", 1);
  },
<<<<<<< HEAD
  findAllOnWatchList(UserID){
    return db(tableName).innerJoin("watch_list","watch_list.IdProduct",`${tableName}.id`).where("watch_list.IdUser",UserID);
  },
  // findWinner(id){
  //   return db(tableName).innerJoin("Auction","watch_list.IdProduct",`${tableName}.id`).where("watch_list.IdUser",UserID);
  // }
=======
  getAuctioned() {
    return db(tableName).where("Isdeleted", 0).whereExists(function() {
      this.select('*').from('auction').whereRaw('auction.IdProduct = product.id');
    })
  },
  getAuctionAvailable() {
    return db(tableName).where('DateEnd', '>=', new Date())
  }
>>>>>>> 4e162a8612095685f4553a5bc5e8612aa9d0fa15
};
