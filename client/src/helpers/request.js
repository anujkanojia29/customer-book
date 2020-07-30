const BASE_URL = `http://localhost:5000/api/v1`;


export function getCustomersURL() {
    return `${BASE_URL}/customers`;
}

export function getAddressesURL(id) {
    return `${BASE_URL}/customers/${id}/address`;
}
