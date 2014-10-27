package no.finntech.search.dash;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloWorld {

    @RequestMapping("/hello")
    public String hello() {
        return "helloworld";
    }
}
