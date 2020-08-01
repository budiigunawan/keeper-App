import swal from "sweetalert"
import axios from "axios"

const url = 'http://localhost:3000'

export function getAllNotes(){
    return (dispatch) => {
        axios({
            url,
            method: 'get'
        })
        .then(response => {
            dispatch({
                type: 'GET_NOTES',
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err);
            swal("Error!","Cannot retrieve notes","error");
        })
    }
}

export function getNote(id){
    return (dispatch) => {
        axios({
            url: url + `/${id}`,
            method: 'get'
        })
        .then(response => {
            console.log(response);
            // dispatch({
            //     type: 'SET_NOTE',
            //     payload: response.data
            // })
        })
        .catch(err=>{
            console.log(err);
            swal("Error!","Cannot retrieve note","error");
        })
    }
}

export function createNote(data){
    return (dispatch) => {
        axios({
            url,
            method: 'post',
            data
        })
        .then(response=>{
            dispatch({
                type: 'SET_CONTACT',
                payload: response.data
            })
            swal("Done!","Note has been added","success")
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function editNote(id,data){
    return (dispatch) => {
        axios({
            url: url + `/${id}`,
            method: "put",
            data
        })
        .then(response => {
            swal("Done!","Successfully edited note","success");
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function removeNote(id){
    return (dispatch)=>{
        console.log(``)
        axios({
            url: url+ `/${id}`,
            method: "delete"
        })
        .then(response=>{
            swal("Done!","Note has been deleted","success")
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}