import axios from 'axios';

export const getClasses = () => {
    // AUTH_TOKEN needs to be constantly updated
    return new Promise(function (resolve, reject) {
        let teacher_id = 'df38c7d3-e749-442f-8751-7af28f2202b1',
            AUTH_TOKEN= 'SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFV3TVRFMU1EUXhOQ3dpYzNWaUlqb2lZMjVjZFRBd00yUlVaV0ZqYUdWeUlERXdRMnhoYzNObGN5eDFhV1JjZFRBd00yUjBaV0ZqYUdWeVh6RXdZMnhoYzNObGN5eDFibWx4ZFdWSlpHVnVkR2xtYVdWeVhIVXdNRE5rWkdZek9HTTNaRE10WlRjME9TMDBOREptTFRnM05URXROMkZtTWpobU1qSXdNbUl4TEc5Y2RUQXdNMlE1TWpBd01EUTNOU3hrWTF4MU1EQXpaRGt5TURBd05EYzBJaXdpYUhSMGNEb3ZMM2QzZHk1cGJYTm5iRzlpWVd3dWIzSm5MMmx0YzNCMWNtd3ZiR2x6TDNZeEwzWnZZMkZpTDNCbGNuTnZiaUk2V3lKSmJuTjBjblZqZEc5eUlsMHNJbVJwYzNSZmFXUWlPaUkwWkRFd01UQTRNUzB4WlRSaUxUUm1NMkV0WVRCbU55MWhPV0k0T1RoaU1ERmtZamNpTENKelkyaHZiMnhmYVdRaU9pSTRabUZqWVRSbE5DMWlNamMwTFRSbU1EUXRPREl6TXkwNFlUYzRZakJqTjJObFpqY2lMQ0p6WTJodmIyeGZjbVZtYVdRaU9pSTRabUZqWVRSbE5DMWlNamMwTFRSbU1EUXRPREl6TXkwNFlUYzRZakJqTjJObFpqY2lMQ0pRYkdGMFptOXliVWxrSWpvaVNVUlRJaXdpWTI5dWRHVjRkRWxrSWpvaUlpd2laR2x6ZEY5eVpXWnBaQ0k2SWpSa01UQXhNRGd4TFRGbE5HSXROR1l6WVMxaE1HWTNMV0U1WWpnNU9HSXdNV1JpTnlJc0luTmphRzl2YkY5allYUmxaMjl5ZVNJNklpSXNJbXAwYVNJNkltSTVZMk01TnpRd0xUUTFZVEV0TkRNMk5TMWlNakJpTFRNd01qWTVNamxpWWpFM1lTSXNJbU5zYVdWdWRGOXBaQ0k2SWpFMU1tTmxaRFV3TFRFek5qa3ROR0l4T1MwNFlqSTJMVGhtTTJRMVpEbGlabVEyWVM1b2JXaGpieTVqYjIwaUxDSmxlSEFpT2pFMU1ERXlNelk0TVRSOS5PWkxuV3pIZFZRZUw2ZzlLcW5hTWp1cHM3SXVtTUtLTzRfNnhjOUNfN29FOkJQSThicnFIa3lTZHFQbkM3UGt5Sy9oVHZBMFduWXNuVSs3NU4yWHJXSWM9Cg==';
        axios.defaults.baseURL = 'http://int.hmhone.app.hmhco.com/api/';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.get(`/identity/v4/teachers/${teacher_id}/sections`)
            .then((response) => { resolve(response.data) })
            .catch((err) => { reject(err) })
    });
}