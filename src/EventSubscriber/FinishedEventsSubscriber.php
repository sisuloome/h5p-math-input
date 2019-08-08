<?php

namespace Drupal\h5p_math_input\EventSubscriber;

use Drupal\h5p\Event\FinishedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class FinishedEventsSubscriber implements EventSubscriberInterface {

  public static function getSubscribedEvents() {
    return [
      FinishedEvent::FINISHED_EVENT => "finishedEvent"
    ];
  }

  public function finishedEvent(FinishedEvent $event) {
    drupal_set_message("LOL milline noob");
    error_log("LOL milline noob");
  }
}