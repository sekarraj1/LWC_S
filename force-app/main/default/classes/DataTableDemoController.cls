public with sharing class DataTableDemoController {
    public class DataTableWrapper{
        @AuraEnabled 
        public String empName;
        @AuraEnabled 
        public String empEmail;
        @AuraEnabled 
        public String empPhone;
        @AuraEnabled 
        public String empWebsite;
        @AuraEnabled 
        public String empId;
    }

    @AuraEnabled(cacheable=false)
    public static List<DataTableWrapper> imperativeCall(Integer recToReturn){
        return getRandomEmployees(recToReturn);
    }

    @AuraEnabled(cacheable=false)
    public static List<DataTableWrapper> wireCall(Integer recToReturn){
        return getRandomEmployees(recToReturn);
    }

    private static List<DataTableWrapper> getRandomEmployees(Integer recToReturn){
        List<DataTableWrapper> lstRec = new List<DataTableWrapper>();
        for (Integer i=0;i<recToReturn;i++) {
            DataTableWrapper obj = new DataTableWrapper();
            obj.empId = DummyData_Generator.generateRandomString(18);
            obj.empName = DummyData_Generator.generateRandomString(15);
            obj.empEmail = DummyData_Generator.getRandomEmail();
            obj.empPhone = String.valueOf(DummyData_Generator.generateRandomNumber(10));
            obj.empWebsite = DummyData_Generator.generateRandomString(15)+'.com';
            
        }
        return lstRec;
    }

}
