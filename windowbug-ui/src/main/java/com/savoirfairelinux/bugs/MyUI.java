package com.savoirfairelinux.bugs;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.annotations.Widgetset;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.*;
import com.vaadin.ui.Button.ClickEvent;

/**
 * @author Maxim Gorshkov <maxim.gorshkov <at> savoirfairelinux.com>
 * @date January 27 2015
 */
@Theme("mytheme")
@Widgetset("com.savoirfairelinux.bugs.MyAppWidgetset")
public class MyUI extends UI {

    private Window newWindow;
    private VerticalLayout windowLayout;

    @Override
    protected void init(VaadinRequest vaadinRequest) {
        final VerticalLayout layout = new VerticalLayout();
        layout.setMargin(true);
        setContent(layout);

        Button button = new Button("Open New Window");
        button.addClickListener(new Button.ClickListener() {
            @Override
            public void buttonClick(ClickEvent event) {
                getUI().addWindow(newWindow);
            }
        });

        layout.addComponent(button);
        initWindow();
    }

    private void initWindow(){
        newWindow = new Window();
        newWindow.setModal(true);
        newWindow.center();
        newWindow.setHeight("50px");
        newWindow.setWidth("100px");

        windowLayout = new VerticalLayout();
        windowLayout.setSizeFull();
        windowLayout.setMargin(true);
        windowLayout.addComponent(new Label("Something here..."));

        newWindow.setContent(windowLayout);
    }

    @WebServlet(urlPatterns = "/*", name = "MyUIServlet", asyncSupported = true)
    @VaadinServletConfiguration(ui = MyUI.class, productionMode = false)
    public static class MyUIServlet extends VaadinServlet {
    }
}
