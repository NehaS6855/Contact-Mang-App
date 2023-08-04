const DataUrl = "http://localhost:3000";

export const getAllcontact = () => {
    const data = `${DataUrl}/contacts`
    return axios.get(data)
}

export const getContact = (ContactId) => {
    const data = `${DataUrl}/contacts/${ContactId}`
    return axios.get(data)
}

export const createContact = (contact) => {
    const data = `${DataUrl}/contacts`
    return axios.post(data,contact)
}

export const updateContact = (contact,ContactId) => {
    const data = `${DataUrl}/contacts/${ContactId}`
    return axios.put(data, contact)
}

export const deleteContact = (ContactId) => {
    const data = `${DataUrl}/contacts/${ContactId}`
    return axios.delete(data)
}

export const getAllGroups = () => {
    const data = `${DataUrl}/groups`
    return axios.get(data)

}

export const getGroup = (GroupId) => {
    const data = `${DataUrl}/groups/${GroupId}`
    return axios.get(data)
}