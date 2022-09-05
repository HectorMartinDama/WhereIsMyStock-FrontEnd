import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  constructor() {}

  // Cambia el tema de la pagina.
  changeTheme(){
    if (this.getTheme() == null || this.getTheme() === "light"){ // Tema light ya que todavia no se ha pulsado el boton.
      document.documentElement.setAttribute("data-theme", 'dark');
      this.setTheme("dark");
    }else if (this.getTheme() === "dark"){
      document.documentElement.setAttribute('data-theme', '');
      this.setTheme("light");
    }
  }

  // Cargar el tema guardado cuando la página sea cargada.
  loadStorage(){
    if (this.getTheme() === "light"){
      this.setTheme("light");
    }else if (this.getTheme() == "dark"){
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  // Cambia el value de la key ("theme") del local storage.
  setTheme(value: string){
    localStorage.setItem('theme', value);
  }

  // Devuelve el value de la key ("theme") del local storage.
  getTheme(){
    return localStorage.getItem("theme");
  }
}
