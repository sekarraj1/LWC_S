public with sharing class DummyData_Generator {
    public static String generateRandomAlphaNumber(Integer len){
        final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        String randStr = '';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()),chars.length());
            randStr += chars.substring(idx,idx+1);
        }
        return randStr;
    }
    public static String generateRandomString(Integer len){
        final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        String randStr = '';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            randStr += chars.substring(idx,idx+1);
        }
        return randStr;
    }
    public static Decimal generateRandomNumber(Integer len){
        final String chars = '0123456789';
        String randStr='';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            randStr += chars.substring(idx,idx+1);
        }
        return Decimal.valueOf(randStr);
    }
    public static Integer generateRandomInteger(Integer len){
        final String chars = '0123456789';
        String randStr = '';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()),chars.length());
            randStr +=chars.substring(idx,idx+1);
        }
        return Integer.valueOf(randStr);
    }
    // Get random date in future
    public static Date generateRandomDateInFuture(){
        Integer daysinFuture  = generateRandomInteger(3);
        return Date.today().addDays(-daysinFuture);
    }
    //Generate random email address
    public static String getRandomEmail(){
        return generateRandomString(10)+'@'+generateRandomString(5)+'.com';
    }
}
