import axios from 'axios'

export const service = axios.create({
	baseURL: process.env.TAGESSHAU_ZEITUNG || 'https://www.tagesschau.de/api2/',
	timeout: 1000,
})
