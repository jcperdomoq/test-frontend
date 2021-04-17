import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UiService {

    constructor() { }

    // Desplegar un Toast
    toastShow(title, icon: any, text = null) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon,
            title,
            text
        });
    }

    // Desplegar una alerta custom
    showAlert(title: string, icon: any, text: string = null) {
        Swal.fire({
            icon,
            title,
            text,
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,
        });
    }

    // Desplegar una alerta custom con html
    showAlertHTML(title: string, icon: any, html: string = null) {
        Swal.fire({
            icon,
            title,
            html,
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,
        });
    }

    // Desplegar un loading
    showLoading() {
        Swal.fire({
            allowOutsideClick: false,
            showCloseButton: true,
            icon: 'info',
            text: 'Espere por favor...'
        });
        Swal.showLoading();
    }
    
    // Cerrar un loading
    closeLoading() {
        Swal.close();
    }

    // Desplegar una alerta de error
    showError(err: any, title: string) {
        Swal.fire({
            icon: 'error',
            title,
            footer: this.typeNestErrors(err),
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,
        });
    }

    // Desplegar una lista de errores
    typeNestErrors(data: any): string {
        switch (data.status) {
            case 422:
                let messageError = '<ul>';
                for (const errors in data.error.error) {
                    if (data.error.error.hasOwnProperty(errors)) {
                        const error = data.error.error[errors];
                        for (const message in error) {
                            if (error.hasOwnProperty(message)) {
                                messageError += `<li> ${error[message]}</li>`;
                            }
                        }
                    }
                }
                return `${messageError}</ul>`;
            case 400:
                return `<ul>${data.error.error}</ul>`;
            case 401:
                return `<ul>${data.error.error}</ul>`;
            case 402:
                return `<ul>${data.error.error}</ul>`;
            case 403:
                return `<ul>${data.error.error}</ul>`;
            case 404:
                return `<ul>${data.error.message}</ul>`;
            case 429:
                return `<ul>Demasiadas peticiones. Por favor espere 1 minuto.</ul>`;
            default:
                return '<ul>Comuniquese con el proveedor del servicio.</ul>';
        }
    }
}