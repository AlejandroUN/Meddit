FROM centos:7
RUN yum install -y java-11
COPY "./target/Meddit_SNH_ms-0.0.1-SNAPSHOT.jar" "app.jar"
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
