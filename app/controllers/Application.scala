package controllers

import play.api.data.Form
import play.api.data.Forms._
import play.api.mvc.{Action, Controller}

import scala.collection.immutable.ListMap
import scala.collection.mutable

object Application extends Controller {

  def index = Action {
    print("index")
    Ok(views.html.Index())
  }

  def results() = Action {
    Ok("{ \"ted\" : [ [ " + counter.getOrElse("4915792341043", 0) + ", "+ counter.getOrElse("4915792335891", 0) +" ] ] } ")
  }


  case class NewCall(to: String)

  val newCallForm = Form(
    mapping(
      "to" -> text
    )(NewCall.apply)(NewCall.unapply))

  var counter = new mutable.HashMap[String, Int]()

  def newCall() = Action {
    implicit request =>
      val (newCallData) = newCallForm.bindFromRequest.get

      println("to: " + newCallData.to)

      counter.put(newCallData.to, counter.getOrElse(newCallData.to, 0) + 1)

      Ok("")
  }
}
