public with sharing class generarRandom {
    private static Integer ultimoNumeroGenerado = null;

    public generarRandom() {

    }

    @AuraEnabled
    public static Integer generar(){
        try {
            Integer nuevoNumero;
            do {
                nuevoNumero = Math.mod(Math.abs(Crypto.getRandomInteger()), 8) + 1;
            } while (nuevoNumero == ultimoNumeroGenerado);
            ultimoNumeroGenerado = nuevoNumero;
            return nuevoNumero;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
