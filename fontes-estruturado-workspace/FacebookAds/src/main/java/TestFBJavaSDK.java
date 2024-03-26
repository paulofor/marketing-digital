
import com.facebook.ads.sdk.APIContext;
import com.facebook.ads.sdk.APINodeList;
import com.facebook.ads.sdk.AdAccount;
import com.facebook.ads.sdk.Campaign;

public class TestFBJavaSDK
{
    public static final APIContext context = new APIContext(
            "706794444862792|CGbp7OnFPddRW4s37YXJQR8q6l4",
            "7c5867d822086d8da5c7192df9ef95eb"
    );
    public static void main(String[] args)
    {
        AdAccount account = new AdAccount("939323521124952", context);
        try {
            APINodeList<Campaign> campaigns = account.getCampaigns().requestAllFields().execute();
            for(Campaign campaign : campaigns) {
                System.out.println(campaign.getFieldName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
