import express from "express";
import appointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get('/appointments', async function(req, res){
    try{
        const appointments = await appointmentService.getAllAppointments();
    res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAppointment/:id', async function(req, res){
    const {id} = req.params;
    try{
        const appointments = await appointmentService.getAppointment(id);
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppointment', async function(req, res){
    const {date, doctorId, pacientId} = req.body;
    try{
        const appointments = await appointmentService.saveAppointment(date, doctorId, pacientId);
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/appointment/:id', async function(req, res){
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try{
        const appointments = await appointmentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/appointment/:id', async function(req, res){
    const {id} = req.params;
    try{
        const appointments = await appointmentService.deleteAppointment(id);
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;