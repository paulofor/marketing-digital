package br.com.digicom;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class GoogleTrendsScraper {

    public static void main(String[] args) {
        String query = "tecnologia";
        try {
            getGoogleTrends(query);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void getGoogleTrends(String query) throws IOException {
        String url = "https://trends.google.com/trends/explore?q=" + query;

        Document document = Jsoup.connect(url)
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")
                .get();

        Elements trendItems = document.select(".mdx-content-container .mdx-chart .mdx-chart-bar");

        System.out.println("Related Trends for " + query + ":");

        for (Element trendItem : trendItems) {
            String trend = trendItem.select(".mdx-chart-bar-label").text();
            System.out.println(trend);
        }
    }
}
