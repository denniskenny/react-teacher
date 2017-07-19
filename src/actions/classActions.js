import axios from 'axios';
import {RECIEVE_GETCLASSES_RESPONSE} from '../constants/actionTypes';

//put the getClasses request here from the helper lib JS file
export const getClasses = () => {
    // AUTH_TOKEN needs to be constantly updated
        let teacher_id = '7885db4c-b24d-4208-85ec-3ed4b8895108',
            AUTH_TOKEN= 'SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFV3TURRM09ETTFNeXdpYzNWaUlqb2lZMjVjZFRBd00yUkhiMnhrWlc1bmJHOTNJRTF2ZEdnc2RXbGtYSFV3TUROa1oyOXNaR1Z1WjJ4dmQxOXRiM1JvTEhWdWFYRjFaVWxrWlc1MGFXWnBaWEpjZFRBd00yUTNPRGcxWkdJMFl5MWlNalJrTFRReU1EZ3RPRFZsWXkwelpXUTBZamc0T1RVeE1EZ3NiMXgxTURBelpEa3lNREF3TkRjMUxHUmpYSFV3TUROa09USXdNREEwTnpRaUxDSm9kSFJ3T2k4dmQzZDNMbWx0YzJkc2IySmhiQzV2Y21jdmFXMXpjSFZ5YkM5c2FYTXZkakV2ZG05allXSXZjR1Z5YzI5dUlqcGJJa2x1YzNSeWRXTjBiM0lpWFN3aVpHbHpkRjlwWkNJNklqUmtNVEF4TURneExURmxOR0l0TkdZellTMWhNR1kzTFdFNVlqZzVPR0l3TVdSaU55SXNJbk5qYUc5dmJGOXBaQ0k2SWpobVlXTmhOR1UwTFdJeU56UXROR1l3TkMwNE1qTXpMVGhoTnpoaU1HTTNZMlZtTnlJc0luTmphRzl2YkY5eVpXWnBaQ0k2SWpobVlXTmhOR1UwTFdJeU56UXROR1l3TkMwNE1qTXpMVGhoTnpoaU1HTTNZMlZtTnlJc0lsQnNZWFJtYjNKdFNXUWlPaUpKUkZNaUxDSmpiMjUwWlhoMFNXUWlPaUlpTENKa2FYTjBYM0psWm1sa0lqb2lOR1F4TURFd09ERXRNV1UwWWkwMFpqTmhMV0V3WmpjdFlUbGlPRGs0WWpBeFpHSTNJaXdpYzJOb2IyOXNYMk5oZEdWbmIzSjVJam9pSWl3aWFuUnBJam9pTlRJNE1XSTROMll0Wm1KbU1pMDBZV0l5TFRneFlXVXRaV1ZqWm1NMU5qTTVPV1JoSWl3aVkyeHBaVzUwWDJsa0lqb2lNVFV5WTJWa05UQXRNVE0yT1MwMFlqRTVMVGhpTWpZdE9HWXpaRFZrT1dKbVpEWmhMbWh0YUdOdkxtTnZiU0lzSW1WNGNDSTZNVFV3TURVMk5EYzFNMzAuQjFtVnpFc3NPLUswUGtSR0dWVThoTUZrUWljMUZuUmsyTlU2R3BZOXdXYzpDaG5XRFY4T0dlcE5zM0JJQmxtRWx5NldMRHIvRnFHQTBmU2wreXlCdTlnPQo=';
        axios.defaults.baseURL = 'http://int.hmhone.app.hmhco.com/api/';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        return {
            type: RECIEVE_GETCLASSES_RESPONSE,
            payload: axios.get(`/identity/v4/teachers/${teacher_id}/sections`)
        };
}
