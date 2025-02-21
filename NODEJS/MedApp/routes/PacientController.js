import express from "express";
import pacientService from "../services/PacientService.js";

let router = express.Router();

router.get('/pacients', async function(req, res){
    try{
        const pacient = await pacientService.getAllPacients();
    res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPacient/:id', async function(req, res){
    const {id} = req.params;
    try{
        const pacient = await pacientService.getPacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPacient', async function(req, res){
    const {name, birthDate, email, phone} = req.body;
    try{
        const pacient = await pacientService.savePacient(name, birthDate, email, phone);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/pacient/:id', async function(req, res){
    const {id} = req.params;
    const {name, birthDate, email, phone} = req.body;
    try{
        const pacient = await pacientService.updatePacient(id, {name, birthDate, email, phone});
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/pacient/:id', async function(req, res){
    const {id} = req.params;
    try{
        const pacient = await pacientService.deletePacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;