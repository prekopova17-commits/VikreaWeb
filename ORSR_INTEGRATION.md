# Slovak Business Register (ORSR) Integration Guide

## Current Implementation

The application currently uses **mock data** for company search functionality. The mock implementation includes 6 sample Slovak companies (Matador a.s., Slovak Telekom a.s., Orange Slovensko a.s., ViKrea s.r.o., etc.).

### Files Modified

1. **shared/schema.ts** - Company type definition
2. **server/routes.ts** - API endpoint `/api/companies/search`
3. **client/src/components/PrioritizationMatrix.tsx** - Autocomplete UI

## Integration with Real ORSR API

### Available Options

Since there is **no official government API** for Slovak Business Register (Obchodný register SR), you have three third-party options:

#### 1. Transparent Data API (Recommended for Production)
- **Type:** Commercial API
- **Website:** https://transparentdata.eu/api-global/
- **Contact:** support@transparentdata.pl
- **Features:**
  - Professional structured data
  - Search by company name, IČO, or registration number
  - Returns up to 10 companies per query
  - JSON format responses
  - Authentication: HTTP Basic Auth

**Example Response:**
```json
{
  "ico": "46507345",
  "company_name": "ViKrea s.r.o.",
  "legal_form": "Spoločnosť s ručením obmedzeným",
  "main_address_city": "Bratislava",
  "incorporation_date": "2012-01-20",
  "registered_capital": "5000",
  "registered_capital_currency": "EUR"
}
```

#### 2. lubosdz/parser-orsr (Open Source)
- **Type:** PHP web scraper
- **GitHub:** https://github.com/lubosdz/parser-orsr
- **Features:**
  - Free for private & commercial use
  - Search by company name or IČO
  - Returns company details
- **⚠️ Important:** Max 1 request per minute, cache responses for 3-6 months

**Example Usage:**
```php
$orsr = new ConnectorOrsr();
$companies = $orsr->findByObchodneMeno('ViKrea');
```

#### 3. eWay-CRM ORSR API
- **Type:** Third-party API wrapper
- **GitHub:** https://github.com/eway-crm/ORSR
- **Demo:** http://register-firiem.sk/

### How to Integrate

#### Step 1: Choose API Provider
Select one of the options above based on your needs and budget.

#### Step 2: Update Backend (server/routes.ts)

Replace the mock implementation with real API calls:

```typescript
import fetch from 'node-fetch'; // or your preferred HTTP client

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/companies/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      
      if (!query || query.length < 2) {
        return res.json([]);
      }

      // Example: Transparent Data API integration
      const apiKey = process.env.ORSR_API_KEY;
      const apiSecret = process.env.ORSR_API_SECRET;
      
      const response = await fetch(
        `https://api.transparentdata.pl/key/skSearch?q=${encodeURIComponent(query)}`,
        {
          headers: {
            'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
          }
        }
      );

      const data = await response.json();
      
      // Transform API response to match our Company schema
      const companies = data.map((item: any) => ({
        ico: item.ico,
        name: item.company_name,
        legalForm: item.legal_form,
        city: item.main_address_city
      }));

      res.json(companies);
    } catch (error) {
      console.error("ORSR API error:", error);
      res.status(500).json({ message: "Search failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
```

#### Step 3: Add Environment Variables

Add your API credentials to `.env`:

```env
ORSR_API_KEY=your_api_key_here
ORSR_API_SECRET=your_api_secret_here
```

#### Step 4: Test Integration

1. Restart the server
2. Test the autocomplete in Prioritization Matrix section
3. Verify results match real ORSR data

### Data Available from ORSR

✅ **Available:**
- Company name (Obchodné meno)
- Registration number (IČO)
- Legal form (s.r.o., a.s., etc.)
- Registered office address
- Registration date
- Business activities
- Statutory bodies (directors, board members)
- Shareholders/partners
- Share capital

❌ **Not Available:**
- Financial statements (separate Register účtovných závierok)
- VAT numbers (separate tax authority database)
- Self-employed individuals (Živnostenský register)
- Non-profit organizations (Register právnických osôb)

### Best Practices

1. **Rate Limiting:** Implement caching to avoid excessive API calls
2. **Error Handling:** Show user-friendly messages when API fails
3. **Fallback:** Consider keeping mock data as fallback for development
4. **Testing:** Use real API in staging environment before production
5. **Monitoring:** Log API usage and response times

### Cost Considerations

- **Transparent Data API:** Commercial pricing (contact for quote)
- **lubosdz/parser-orsr:** Free but rate-limited
- **eWay-CRM:** Check their pricing/terms

### Support

For issues with:
- **Application code:** Contact development team
- **API integration:** Contact your chosen API provider
- **Official ORSR data:** https://www.orsr.sk

---

**Note:** The current mock implementation will continue to work for development and testing purposes. Replace it with real API integration when ready for production.
