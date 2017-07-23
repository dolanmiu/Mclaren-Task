type PatientGender = 'male' | 'female';

interface Patient {
    id: number;
    name: string;
    gender: PatientGender;
    birthDate: string;
    heightCm: number,
    weightKg: number;
    bmi: number;
    age: number;
}
