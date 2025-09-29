import { Application } from "@hotwired/stimulus"
import ProjectController from "./project_controller"

const application = Application.start()
application.register("project", ProjectController)
