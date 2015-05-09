package controllers

import play.api.mvc.{Action, Controller}
import play.api.http.MimeTypes

object Application extends Controller {

  def index = Action {
    Ok(views.html.Index())
  }

  def results() = Action {
    Ok("{ \"ted\" : [ [ 23, 5 ] ] } ")
  }

  def newCall() = Action {
    Ok("")
  }
}
