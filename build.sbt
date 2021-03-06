name := "angular-seed-play"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  "org.webjars" % "angularjs" % "1.3.0-beta.2",
  "org.webjars" % "requirejs" % "2.1.11-1",
  "org.webjars" % "angular-chart.js" % "0.5.3"
)     

lazy val root = (project in file(".")).enablePlugins(PlayScala)

pipelineStages := Seq(rjs, digest, gzip)


fork in run := true