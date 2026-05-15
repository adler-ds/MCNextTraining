# Platform Comparison: Marketing Cloud on Core vs Legacy Marketing Cloud

## Architecture

### Marketing Cloud on Core
- Built natively on Salesforce platform
- Uses standard Salesforce objects (Leads, Contacts, Accounts, etc.)
- Lightning Experience interface
- Unified data model with Sales/Service Cloud

### Legacy Marketing Cloud
- Built on ExactTarget architecture
- Uses Subscribers and Data Extensions
- Separate authentication and system
- Requires Marketing Cloud Connect for CRM integration

## Key Advantages of MC on Core

### 1. Native Integration
- Direct access to CRM data without connectors
- Real-time data synchronization
- No duplicate data management

### 2. Simplified Administration
- Standard Salesforce permissions and sharing
- Familiar setup and configuration
- Single login and authentication

### 3. Unified Experience
- Consistent UI across all Salesforce clouds
- Same navigation and workflows
- Integrated reporting and dashboards

### 4. Platform Capabilities
- Leverage Flow, Apex, and platform automation
- Use standard Salesforce reporting
- Access to AppExchange solutions

## What's Different?

| Feature | Legacy MC | MC on Core |
|---------|-----------|------------|
| Data Model | Subscribers, Data Extensions | Standard Salesforce Objects |
| Interface | Classic MC Studio | Lightning Experience |
| Integration | MC Connect required | Native |
| Authentication | Separate login | Single Salesforce login |
| Automation | Automation Studio | Flow + Journey Builder |
| Reporting | MC Analytics | Salesforce Reports & Dashboards |

## Migration Considerations

- Review existing campaigns and journeys
- Map data extensions to Salesforce objects
- Retrain users on new interface
- Update integrations and APIs
- Plan cutover strategy
