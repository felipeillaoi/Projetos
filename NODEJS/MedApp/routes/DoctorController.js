import express from "express";
import doctorService from "../services/DoctorService.js";

let router = express.Router();

router.get('/doctors', async function(req, res){
    try{
        const doctors = await doctorService.getAllDoctors();
    res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getDoctor/:id', async function(req, res){
    const {id} = req.params;
    try{
        const doctor = await doctorService.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postDoctor', async function(req, res){
    const {name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body;
    try{
        const doctor = await doctorService.saveDoctor(name, login, password, medicalSpeciality, medicalRegistration, email, phone);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/doctor/:id', async function(req, res){
    const {id} = req.params;
    const {name, login, password, medicalSpeciality, medicalRegistration, email, phone} = req.body;
    try{
        const doctor = await doctorService.updateDoctor(id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctor/:id', async function(req, res){
    const {id} = req.params;
    try{
        const doctor = await doctorService.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;