
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 📌 CREATE Appointment
export const createAppointment = async (req, res) => {
  try {
    const {
      patientId,
      doctorId,
      departmentId,
      scheduledAt,
      status,
      reason,
      notes,  
    } = req.body;

    // Create appointment record
    const appointment = await prisma.appointment.create({
      data: {
        patientId: Number(patientId),
        doctorId: doctorId ? Number(doctorId) : null,
        departmentId: departmentId ? Number(departmentId) : null,
        scheduledAt: new Date(scheduledAt),
        status,
        reason,
        notes,
      },
      include: {
        patient: {
          select: { id: true, fatherName: true, bloodGroup: true },
        },
        doctor: {
          select: { id: true, doctorCode: true, speciality: true },
        },
        department: { select: { id: true, name: true } },
      },
    });

    res.status(201).json({
      message: "✅ Appointment created successfully",
      data: appointment,
    });
  } catch (error) {
    console.error("❌ Error creating appointment:", error);
    res.status(500).json({ message: "Error creating appointment", error });
  }
};

// 📌 READ — Get All Appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { isDeleted: false },
      orderBy: { createdAt: "desc" },
      include: {
        patient: {
          select: { id: true, fatherName: true, bloodGroup: true },
        },
        doctor: {
          select: { id: true, doctorCode: true, speciality: true },
        },
        department: { select: { id: true, name: true } },
      },
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.error("❌ Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};



// 📌 READ — Get Appointment by ID
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await prisma.appointment.findUnique({
      where: { id: Number(id) },
      include: {
        patient: true,
        doctor: true,
        department: true,
      },
    });

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    console.error("❌ Error fetching appointment:", error);
    res.status(500).json({ message: "Error fetching appointment", error });
  }
};

// 📌 UPDATE Appointment
export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      patientId,
      doctorId,
      departmentId,
      scheduledAt,
      status,
      reason,
      notes,
    } = req.body;

    const appointment = await prisma.appointment.update({
      where: { id: Number(id) },
      data: {
        patientId: patientId ? Number(patientId) : undefined,
        doctorId: doctorId ? Number(doctorId) : undefined,
        departmentId: departmentId ? Number(departmentId) : undefined,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : undefined,
        status,
        reason,
        notes,
      },
    });

    res.status(200).json({
      message: "✅ Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    console.error("❌ Error updating appointment:", error);
    res.status(500).json({ message: "Error updating appointment", error });
  }
};

// 📌 DELETE Appointment (soft delete)
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.appointment.update({
      where: { id: Number(id) },
      data: { isDeleted: true, isActive: false, deletedAt: new Date() },
    });

    res.status(200).json({ message: "✅ Appointment deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting appointment:", error);
    res.status(500).json({ message: "Error deleting appointment", error });
  }
};
