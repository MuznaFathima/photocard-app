import { BASE_URL } from "./Baseurl";
import { commonrequest } from "./commonrequest";


// to add card details

export const addDetails=async(body)=>{
  return await commonrequest(`${BASE_URL}/photos`,"POST",body)
 
}
// to show photos
export const getphotos=async()=>{
    return await commonrequest(`${BASE_URL}/photos`,"GET","")
   
  }

//   to delete cards

export const deletePhoto=async(id)=>{
    return await commonrequest(`${BASE_URL}/photos/${id}`,"DELETE",{})
}

// to edit cards

export const editphoto=async(id,body)=>{
  return await commonrequest(`${BASE_URL}/photos/${id}`,"PUT",body)
}