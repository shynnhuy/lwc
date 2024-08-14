public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList(String keyword) {
    String query = 'SELECT Id, Name, Phone FROM ACCOUNT';

    if (String.isNotEmpty(keyword)) {
      String key = '%' + keyword + '%';
      query += ' WHERE Name LIKE :key';
    }

    query += ' ORDER BY CreatedDate DESC LIMIT 10';

    List<Account> accounts = Database.query(query);
    return accounts;
  }
}
