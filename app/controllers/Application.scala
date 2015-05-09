package controllers

import play.api.mvc.{Action, Controller}
import play.api.http.MimeTypes
import 

object Application extends Controller {

  def index = Action {
    Ok(views.html.Index())
  }

  def results() = Action {
    Ok("{ \"ted\" : [ [ 23, 5 ] ] } ")
  }

  
  case class NewCall(to: String)
  
  val newCallForm = Form(
      mapping(
          "to" -> text)
      )(NewCall.apply)(NewCall.unapply)

  var counter = Map("4915792341043"-> 0, "4915792335891"-> 0)
  def newCall() = Action {
      
      newCallForm.bindFromRequest.fold(
          formData => {
              val newCallData = NewCall(formData.to)
              print(newCallData.to)
          }
          )
    Ok("")
  }
}
