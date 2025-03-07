import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return await doctorRepository.getAllDoctors();
}

const getDoctor = async (id) => {
    return await doctorRepository.getDoctor(id);
}

const saveDoctor = async ({name, login, password, medicalSpeciality, medicalRegistration, email, phone}) => {
    return await doctorRepository.saveDoctor({name, login, password, medicalSpeciality, medicalRegistration, email, phone});
}

const updateDoctor = async (id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone}) => {
    return await doctorRepository.updateDoctor(id, {name, login, password, medicalSpeciality, medicalRegistration, email, phone});
}

const deleteDoctor = async (id) => {
    return await doctorRepository.deleteDoctor(id);   
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService;