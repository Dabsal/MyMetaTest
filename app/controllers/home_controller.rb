class HomeController < ApplicationController
  def index
    @projects = [
      { title: "Six Fisher Island", image_url: "projects/fisher.png" },
      { title: "Icon Beach", image_url: "projects/iconbeach.png" },
      { title: "Lake Helen", image_url: "projects/clearwater.jpg" },
      { title: "Rivage Bal Harbour", image_url: "projects/rivage.png" }
    ]
  end
end
