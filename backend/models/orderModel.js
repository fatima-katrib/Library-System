import { Schema, model } from "mongoose";
import Book from "./book.js";

const orderSchema = new Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: false,
    },
    Status: {
      type: String,
      enum: ["accepted", "pending", "rejected"],
      default: "pending",
    },
    Book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
    DateFrom: {
      type: Date,
      required: true,
    },
    DateTo: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "orders",
  }
);
orderSchema.pre(["find", "findOne"], function () {
  this.populate(["Book"]);
});

//trigger
orderSchema.pre("save", async function (next) {
   
  
    if (!this.isModified("Status")) return next();
  
    const book = await Book.findById(this.Book).exec();
  
    if (!book) {
      return next(new Error("Book not found"));
    }
  if (this.isModified("Status")){
    if (this.Status === "accepted") {
      book.status = "borrowed";
      book.borrowsNb++;
      console.log("borrowed");
    } else if (this.Status === "pending") {
      book.status = "pending";
      console.log("pending");
    } else if (this.Status === "rejected") {
      book.status = "available";
      console.log("available");
    }
  
    try {
      await book.save();
      return next();
    } catch (error) {
      return next(error);
    }
  }});
  
//   orderSchema.post("updateOne", async function (val) {
//     const update = this.getUpdate();
  
//     if (!update.hasOwnProperty("Status")) return next();
  
//     const book = await Book.findById(this.Book).exec();
  
//     if (!book) {
//       return next(new Error("Book not found"));
//     }
  
//     if (this.Status === "accepted") {
//       book.status = "borrowed";
//       book.borrowsNb++;
//       console.log("borrowed");
//     } else if (this.Status === "pending") {
//       book.status = "pending";
//       console.log("pending");
//     } else if (this.Status === "rejected") {
//       book.status = "available";
//       console.log("available");
//     }
  
//     try {
//       await book.save();
//       return next();
//     } catch (error) {
//       return next(error);
//     }
//   });
  
  
  

// orderSchema.post("save", async function (next) {
//   const update = this.getUpdate();

//   if (!update.hasOwnProperty("Status")) {
//     return next();
//   }
//   const book = await Book.findById(this._conditions.Book).exec();
//   if (!book) {
//     return next(new Error("Book not found"));
//   }

//   if (this._update.Status == "accepted") {
//     book.status = "borrowed";
//     book.borrowsNb++;
//     console.log("updated");
//   }

//   if (this._update.Status == "pending") {
//     book.status = "pending";
//     console.log("updated pending");
//   }

//   if (this._update.Status == "rejected") {
//     book.status = "available";
//     console.log("updated");
//   }
//   await book.save();
//   next();
// });

const Order = model("Order", orderSchema);
export default Order;
